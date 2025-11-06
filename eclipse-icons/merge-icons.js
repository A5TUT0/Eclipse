#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Paths
const catppuccinExtPath = path.join(
  process.env.HOME,
  ".vscode/extensions/catppuccin.catppuccin-vsc-icons-1.26.0"
);
const catppuccinPath = path.join(catppuccinExtPath, "dist/mocha/theme.json");
const catppuccinIconsPath = path.join(catppuccinExtPath, "dist/mocha/icons");
const eclipsePath = path.join(__dirname, "iconTheme-custom.json");
const outputIconsPath = path.join(__dirname, "icons-catppuccin");

// Helper to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  console.log("📦 Copying Catppuccin icons...");

  // Copy all Catppuccin icons
  if (fs.existsSync(catppuccinIconsPath)) {
    copyDir(catppuccinIconsPath, outputIconsPath);
    console.log(`✅ Copied Catppuccin icons to ${outputIconsPath}`);
  } else {
    console.error(`❌ Catppuccin icons not found at ${catppuccinIconsPath}`);
    process.exit(1);
  }

  console.log("🔧 Merging themes...");

  const catppuccin = JSON.parse(fs.readFileSync(catppuccinPath, "utf8"));
  const eclipse = JSON.parse(fs.readFileSync(eclipsePath, "utf8"));

  // Update Catppuccin icon paths to point to our copied icons
  const updatedCatppuccin = { ...catppuccin };
  for (const [key, value] of Object.entries(
    updatedCatppuccin.iconDefinitions
  )) {
    if (value.iconPath && value.iconPath.startsWith("./icons/")) {
      value.iconPath = value.iconPath.replace(
        "./icons/",
        "./icons-catppuccin/"
      );
    }
  }

  // Merge: Catppuccin base + Eclipse overrides
  const merged = {
    ...updatedCatppuccin,
    iconDefinitions: {
      ...updatedCatppuccin.iconDefinitions,
      ...eclipse.iconDefinitions,
    },
    fileNames: {
      ...updatedCatppuccin.fileNames,
      ...eclipse.fileNames,
    },
    fileExtensions: {
      ...updatedCatppuccin.fileExtensions,
      ...eclipse.fileExtensions,
    },
    folderNames: {
      ...updatedCatppuccin.folderNames,
      ...eclipse.folderNames,
    },
    folderNamesExpanded: {
      ...updatedCatppuccin.folderNamesExpanded,
      ...eclipse.folderNamesExpanded,
    },
  };

  // Write merged theme
  fs.writeFileSync(
    path.join(__dirname, "iconTheme.json"),
    JSON.stringify(merged, null, 2)
  );

  console.log("✅ Successfully merged Catppuccin + Eclipse icons!");
  console.log(
    `   - ${Object.keys(merged.iconDefinitions).length} icon definitions`
  );
  console.log(`   - Icons from Catppuccin: icons-catppuccin/`);
  console.log(`   - Icons from Eclipse: icons/`);

  console.log(
    `   Total icon definitions: ${Object.keys(merged.iconDefinitions).length}`
  );
} catch (error) {
  console.error("❌ Error merging themes:", error.message);
  process.exit(1);
}

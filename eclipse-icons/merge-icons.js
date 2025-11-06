#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Paths for Material Icon Theme
const materialExtPath = path.join(
  process.env.HOME,
  ".vscode/extensions/pkief.material-icon-theme-5.28.0"
);
const materialThemePath = path.join(
  materialExtPath,
  "dist/material-icons.json"
);
const materialIconsPath = path.join(materialExtPath, "icons");
const eclipsePath = path.join(__dirname, "iconTheme-custom.json");
const outputIconsPath = path.join(__dirname, "icons-material");

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
  console.log("📦 Copying Material Icon Theme icons...");

  // Copy all Material icons
  if (fs.existsSync(materialIconsPath)) {
    copyDir(materialIconsPath, outputIconsPath);
    console.log("✅ Copied Material icons to " + outputIconsPath);
  } else {
    console.error("❌ Material icons not found at " + materialIconsPath);
    process.exit(1);
  }

  console.log("🔧 Merging themes...");

  const material = JSON.parse(fs.readFileSync(materialThemePath, "utf8"));
  const eclipse = JSON.parse(fs.readFileSync(eclipsePath, "utf8"));

  // Update Material icon paths to point to our copied icons
  const updatedMaterial = { ...material };
  for (const [key, value] of Object.entries(
    updatedMaterial.iconDefinitions || {}
  )) {
    if (value.iconPath) {
      // Handle both ../icons/ and ./../icons/ formats
      if (value.iconPath.includes("../icons/")) {
        value.iconPath = value.iconPath.replace(
          /\.?\.\/?\.\.\/icons\//g,
          "./icons-material/"
        );
      }
    }
  }

  // Merge: Material base + Eclipse overrides
  const merged = {
    ...updatedMaterial,
    iconDefinitions: {
      ...updatedMaterial.iconDefinitions,
      ...eclipse.iconDefinitions,
    },
    fileNames: {
      ...updatedMaterial.fileNames,
      ...eclipse.fileNames,
    },
    fileExtensions: {
      ...updatedMaterial.fileExtensions,
      ...eclipse.fileExtensions,
    },
    folderNames: {
      ...updatedMaterial.folderNames,
      ...eclipse.folderNames,
    },
    folderNamesExpanded: {
      ...updatedMaterial.folderNamesExpanded,
      ...eclipse.folderNamesExpanded,
    },
  };

  // Write merged theme
  fs.writeFileSync(
    path.join(__dirname, "iconTheme.json"),
    JSON.stringify(merged, null, 2)
  );

  console.log("✅ Successfully merged Material Icon Theme + Eclipse icons!");
  console.log(
    "   - " + Object.keys(merged.iconDefinitions).length + " icon definitions"
  );
  console.log("   - Icons from Material: icons-material/");
  console.log("   - Icons from Eclipse: icons/");
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}

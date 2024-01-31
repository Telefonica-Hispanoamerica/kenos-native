const { execSync } = require('child_process');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const createIcons = require('./utils/generate-react-icons');
const { join } = require('path');


function toPascalCase(str) {
    return str
        .split(/[-_]/)
        .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join('');
}

const PATH_REPO_ROOT = join(__dirname, '..');
const PATH_TEMP_ICONS = join(PATH_REPO_ROOT, '.icons');
const PATH_OUTPUT = 'src/kenos-icons';
const ICONS_SRC_REPO = 'git@github.com:Telefonica-Hispanoamerica/kenos-icons.git';
const ICONS_REPO_BRANCH = 'master';

rimraf.sync(PATH_TEMP_ICONS);
rimraf.sync(PATH_OUTPUT);

mkdirp.sync(PATH_TEMP_ICONS);
mkdirp.sync(PATH_OUTPUT);

execSync(
    `git clone ${ICONS_SRC_REPO} --single-branch ${ICONS_REPO_BRANCH}`,
     { cwd: PATH_TEMP_ICONS,
     stdio: 'inherit',
    }
);

function saveIcon (path, filename, xml) {
    const iconName = `Icon${filename}`;
    const iconFile = createIcons(xml.toString(), iconName);

    mkdirp.sync(`${PATH_OUTPUT}${path}`);
    fs.writeFileSync(`${PATH_OUTPUT}${path}/${iconName}.tsx`, iconFile);
}

function handleImportedVectors(currentPath) {
    const path = `${PATH_TEMP_ICONS}/${ICONS_REPO_BRANCH}${currentPath}`;

    fs.readdirSync(path).forEach(element => {
        const elementPath = `${path}/${element}`;

        if (fs.lstatSync(elementPath)?.isDirectory()) {
            if (element === '.github') {
                return;
            }

            // Recursivamente procesar subcarpetas
            handleImportedVectors(`${currentPath}/${element}`);
        } else if (element.slice(-4).toLocaleLowerCase() === '.svg') {
            // Solo procesar archivos SVG

            // Obtener la última parte del path (nombre del archivo) sin la extensión
            const fileName = element.split('.').slice(0, -1).join('.');

            // Crear el nombre corregido
            const correctedName = toPascalCase(fileName);

            // Guardar el icono en la carpeta de salida
            saveIcon('', correctedName, fs.readFileSync(elementPath));
        }
    });
}


handleImportedVectors('');
const indexPath = join(PATH_OUTPUT, 'index.tsx');
const indexContent = fs.readdirSync(PATH_OUTPUT)
    .filter(file => file.endsWith('.tsx'))
    .map(file => {
        const componentName = toPascalCase(file.replace('.tsx', ''));
        return `export { default as ${componentName} } from './${file.replace('.tsx', '')}'`;
    })
    .join('\n');

fs.writeFileSync(indexPath, indexContent, 'utf8');
rimraf.sync(PATH_TEMP_ICONS);

console.log('Done importing icons.')
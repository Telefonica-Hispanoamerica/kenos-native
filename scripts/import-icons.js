const { execSync } = require('child_process');
const fs = require('fs');

const PATH_TEMP_ICONS = '.icons';
const PATH_OUTPUT = 'src/kenos-icons';
const ICONS_SRC_REPO = 'git@github.com:Telefonica-Hispanoamerica/kenos-icons.git';
const ICONS_REPO_BRANCH = 'master';

execSync(`rm -rf ${PATH_TEMP_ICONS} && rm -rf ${PATH_OUTPUT}`);
execSync(`mkdir -p ${PATH_TEMP_ICONS} && mkdir -p ${PATH_OUTPUT}`);
execSync(
    `cd ${PATH_TEMP_ICONS};
     git clone ${ICONS_SRC_REPO} --single-branch ${ICONS_REPO_BRANCH}`
);

function saveIcon (path, filename, xml) {
    const iconFile = `
        // Icon generated automatically from kenos-icons
         import { SvgXml } from 'react-native-svg';

         export default function Icon ({ width, height }) {
            return (
                <SvgXml
                    width={width}
                    height={height}
                    xml={\`${xml}\`}
                />
            );
         }
    `;

    execSync(`mkdir -p ${PATH_OUTPUT}${path}`);
    fs.writeFileSync(`${PATH_OUTPUT}${path}/${filename}.jsx`, iconFile);
}

function handleImportedVectors (currentPath) {
    const path = `${PATH_TEMP_ICONS}/${ICONS_REPO_BRANCH}${currentPath}`;

    fs.readdirSync(path).forEach(element => {
        if (fs.lstatSync(`${path}/${element}`)?.isDirectory()) {
            if (element === '.github') {
                return;
            }
            
            handleImportedVectors(`${currentPath}/${element}`);
            return;
        }

        if (element.slice(-4).toLocaleLowerCase() !== '.svg') {
            return;
        }

        const fileContent = fs.readFileSync(`${path}/${element}`);
        const correctedName = element
            .slice(0, -4)
            .split('-')
            .map(segment => `${segment.slice(0,1).toUpperCase()}${segment.slice(1)}`)
            .join('');
        saveIcon(currentPath, correctedName, fileContent);
    });
}

handleImportedVectors('');
execSync(`rm -rf ${PATH_TEMP_ICONS}`);

console.log('Done importing icons.')
const fs = require('fs');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf')
const {execSync} = require('child_process');

const {colors} = require('./contracts');
const {
    PATH_CACHE,
    PATH_KENOS_DESIGN_REPO,
    GIT_KENOS_DESIGN_BRANCH,
    GIT_KENOS_DESIGN,
    PATH_KENOS_DESIGN_TOKENS_JSON,
    OUT_PATH,
    JUMPS,
    TABS,
    FILE_NAME
} = require('./const');

const {environment} = require('./environment')

const {NAME_FUNCTION_GET_SKIN, NAME_SKIN_CONSTANT, KEY_SKIN_NAME} = environment


const checkoutKenosDesignRepo = () => {
    console.log(` `)
    console.log(`Paso 1:`)
    console.log("Clonando repositorio...")
    mkdirp.sync(PATH_CACHE);

    if (!fs.existsSync(PATH_KENOS_DESIGN_REPO)) {
        console.log(`git clone ${GIT_KENOS_DESIGN} ${PATH_KENOS_DESIGN_REPO}`);
        execSync(`git clone ${GIT_KENOS_DESIGN} ${PATH_KENOS_DESIGN_REPO}`, {
            cwd: PATH_CACHE,
            stdio: 'inherit',
        });
    }

    execSync(`git fetch`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });

    execSync(`git checkout ${GIT_KENOS_DESIGN_BRANCH}`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });

    execSync(`git pull`, {
        cwd: PATH_KENOS_DESIGN_REPO,
        stdio: 'inherit',
    });

    console.log(` `)
    console.log(`Paso 1 - Completado:`)
    console.log(`El repositorio ha sido clonado en: ${PATH_KENOS_DESIGN_REPO}`)
};

const getAppMiMovistarTokens = () => {
    const dataTokens = fs.readFileSync(PATH_KENOS_DESIGN_TOKENS_JSON, 'utf-8');
    const key = KEY_SKIN_NAME
    const objectTokens = JSON.parse(dataTokens);
    const dataParsed = objectTokens[key];
    return dataParsed;
};

function findKeyPathInObject(obj, keyToFind, currentPath = []) {
    // Recorre todas las claves del objeto
    for (const key in obj) {
        // Si la clave actual coincide con la clave buscada, se ha encontrado
        if (key === keyToFind) {
            return [...currentPath, key];
        }

        // Si el valor de la clave actual es otro objeto, busca en él recursivamente
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            const path = findKeyPathInObject(obj[key], keyToFind, [...currentPath, key]);
            if (path) {
                return path;
            }
        }
    }

    // Si no se encuentra la clave en ninguna parte del objeto, retorna null
    return null;
}

function createMappingValues(obj, allPaths, variant) {
    const mapping = [];

    if (variant === 'COLORS') {
        allPaths.forEach((path) => {
            if (path !== null) {
                if (path.length === 2) {
                    if (obj[path[0]][path[1]].description) {
                        mapping.push([path[1], `palette.${obj[path[0]][path[1]].description}`]);
                    return;
                } else return;
                }
                if (path.length === 3) {
                    if (obj[path[0]][path[1]][path[2]].description) {
                    mapping.push([path[2], `palette.${obj[path[0]][path[1]][path[2]].description}`]);
                    return;
                } else return;
                }
            }
        });
    } 
    if (variant === 'PALETTE') {
        allPaths.forEach((path) => {
            if (path !== null) {
                if (path.length === 2) {
                    if (obj[path[0]][path[1]].description) {
                        mapping.push([obj[path[0]][path[1]].description, obj[path[0]][path[1]].value]);
                        return;
                    } else return;
                }
                if (path.length === 3) {
                    if (obj[path[0]][path[1]][path[2]].description) {
                        mapping.push([
                            obj[path[0]][path[1]][path[2]].description,
                            obj[path[0]][path[1]][path[2]].value,
                        ]);
                        return;
                    } else return;
                }
            }
        });
    }

    return mapping;
}

const createMapping = (variant) => {
    const appMiMovistarTokens = getAppMiMovistarTokens();
    const allKeys = Object.keys(colors);

    const allPaths = allKeys.map((key) => {
        return findKeyPathInObject(appMiMovistarTokens, key);
    });

    const mapping = createMappingValues(appMiMovistarTokens, allPaths, variant);
    return mapping;
};

function deleteSubarrayDuplicates(array) {
    const objetoAuxiliar = {};
    const arraySinDuplicados = [];

    for (const subarray of array) {
        const subarrayString = JSON.stringify(subarray[0]);
        if (!objetoAuxiliar[subarrayString]) {
            objetoAuxiliar[subarrayString] = true;
            arraySinDuplicados.push(subarray);
        }
    }

    // Ordenar alfabéticamente los subarrays
    arraySinDuplicados.sort((a, b) => {
        const subarrayStringA = JSON.stringify(a);
        const subarrayStringB = JSON.stringify(b);
        return subarrayStringA.localeCompare(subarrayStringB);
    });

    return arraySinDuplicados;
}

const createPaletteObject = (OUT_PATH) => {
    const mappingValues = createMapping('PALETTE');
    const firstLineObject = `export const palette = {
`;
    const lastLineObject = '};';
    const mappingFiltered = deleteSubarrayDuplicates(mappingValues);

    fs.writeFileSync(OUT_PATH, firstLineObject, {flag: 'a'});
    mappingFiltered.forEach((arr, index) => {
        const [key, value] = arr;
        const fisrtContent = `    ${key}: '${value}',
    `;
        const anotherContent = `${key}: '${value}',
    `;
        const finalContent = `${key}: '${value}',
`;
        const content =
            index === 0 ? fisrtContent : index === mappingFiltered.length - 1 ? finalContent : anotherContent;
        fs.writeFileSync(OUT_PATH, content, {flag: 'a'});
    });
    fs.writeFileSync(OUT_PATH, lastLineObject, {flag: 'a'});

    console.log(` `)
    console.log(`Paso 2:`)
    console.log(`El objeto de paleta fue creado y escrito en: ${FILE_NAME}`)

};

const createColorsObject = (OUT_PATH) => {
    const mappingValues = createMapping('COLORS');
    const firstLineObject = `colors: {
`;
    const lastContent = `

            // Missing properties

            borderLow: "",
            borderHigh: "",
            buttonSecondaryBorder: "",
            buttonSecondaryBorderSelected: "",
            buttonSecondaryBackgroundHover: "",
            buttonSecondaryBackgroundInverseHover: "",
            buttonSecondaryBackgroundSelectedInverse: "",
            neutralMediumInverse: "",
            successHighInverse: "",
            warningHighInverse: "",
            errorHighInverse: "",
            promoHighInverse: "",
        },`;
    fs.writeFileSync(OUT_PATH, firstLineObject, {flag: 'a'});

    mappingValues.forEach((arr, index) => {
        const [key, value] = arr;
        const fisrtContent = `${TABS.THREE}${key}: ${value},
${TABS.THREE}`;
        const anotherContent = `${key}: ${value},
${TABS.THREE}`;
        const finalContent = `${key}: ${value},`;
        const content =
            index === 0 ? fisrtContent : index === mappingValues.length - 1 ? finalContent : anotherContent;
        fs.writeFileSync(OUT_PATH, content, {flag: 'a'});
    });

    fs.writeFileSync(OUT_PATH, lastContent, {flag: 'a'});

    console.log(`El objeto Colors fue creado y escrito en: ${FILE_NAME}`)

};

const createSkinFile = () => {
    rimraf.sync(OUT_PATH)

    const firstContent = `import {applyAlpha} from '../utils/color';
import { ${NAME_SKIN_CONSTANT} } from "./constants";
import type { GetKnownSkin,  KnownSkin } from "./types" 

`;
    fs.writeFileSync(OUT_PATH, firstContent, {flag: 'a'});

    createPaletteObject(OUT_PATH);
    fs.writeFileSync(OUT_PATH, JUMPS.ONE, {flag: 'a'});

    const fisrstContentFunction = `
export const ${NAME_FUNCTION_GET_SKIN}: GetKnownSkin = () => {
${TABS.ONE}const skin: KnownSkin = {
${TABS.TWO}name: ${NAME_SKIN_CONSTANT},
${TABS.TWO}`;
    fs.writeFileSync(OUT_PATH, fisrstContentFunction, {flag: 'a'});

    createColorsObject(OUT_PATH);

    const lastContentFunction = `
${TABS.ONE}}
    return skin;
};
`;

    fs.writeFileSync(OUT_PATH, lastContentFunction, {flag: 'a'});
}

module.exports = {checkoutKenosDesignRepo, createSkinFile};

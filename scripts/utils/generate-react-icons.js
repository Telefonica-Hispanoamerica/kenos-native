function sliceXml (xml) {
    return xml
        .split('><')
        .filter((tag) => {
            if (tag.includes('<!--')) {
                // Comments
                return false;
            }
            if (tag.includes('?xml')) {
                // Header tag
                return false;
            }
            return true;
        })
        .map((tag, i) => {
            if (i === 0) {
                return `${tag}>`;
            }
            return `<${tag}>`;
        });
}

function convertTags (tag) {
    if (tag.includes('svg')) {
        return tag
            .replace('svg', 'Svg')
            .replace('xmlns="http://www.w3.org/2000/svg"', '')
            .replace(/width=".*"/, 'width={props.width} height={props.height}');
    }

    if (tag.includes('path')) {
        return tag.replace('path', 'Path');
    }

    return tag;
}

function outputFileContents (generatedCode) {
    return ` // File generated automatically with 'npm run import-icons'.
    import Svg, { Path } from 'react-native-svg'

    type Props = { height: string, width: string };

    export default function Icon (props: Props) {
        return (
            ${generatedCode}
        )
    }
    `;
}

module.exports = function createIcons (xml) {
    const outputJsx = sliceXml(xml)
        .map((tag) => convertTags(tag))

    const finalCode = outputFileContents(
        outputJsx
        .join('\n')
        .slice(0, -1)
    );

    return finalCode;
}
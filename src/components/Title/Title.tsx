import * as React from 'react';
import { Text1, Text2, Text5 } from '../Text/Text';
import Box from '../../layout/Box/Box';
import { useTheme } from '../../utils/ThemeContextProvider';
import Inline from '../../layout/Inline/Inline';

type TitleLayoutProps = {
    title: React.ReactElement;
    right?: React.ReactNode;
};

const TitleLayout = ({ title, right }: TitleLayoutProps): React.ReactElement => {
    if (!right) {
        return title;
    }

    return (
        <Inline space="between" alignItems="baseline">
            {title}
            <Box paddingLeft={16}>
                <Text2>{right}</Text2>
            </Box>
        </Inline>
    );
};

type TitleProps = {
    children: React.ReactNode;
    id?: string;
    right?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export const Title1 = ({ children, as = 'h3', id, right }: TitleProps): React.ReactElement => {
    const { skin } = useTheme();
    const { colors } = skin;
    return (
        <TitleLayout
            title={
                <Text1
                    medium
                    color={colors.textSecondary}
                    transform="uppercase"
                    as={as}
                    id={id}
                    wordBreak={false}
                >
                    {children}
                </Text1>
            }
            right={right}
        />
    );
};

export const Title2 = ({ children, as = 'h3', id, right, }: TitleProps): React.ReactElement => {
    return (
        <TitleLayout
            title={
                <Text5 as={as} id={id}>
                    {children}
                </Text5>
            }
            right={right}
        />
    );
};
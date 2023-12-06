/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {SvgXml} from 'react-native-svg';
import {IconProps} from '../../components/icons/type';
import {useTheme} from '../../hooks/ThemeContextProvider';

const IconAntennaLight = ({color, size = 24}: IconProps): JSX.Element => {
  const {skin} = useTheme();
  //const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
  //
  return (
    <SvgXml
      xml={
        '<svg width={size} height={size} viewBox="0 0 24 24" role="presentation"><path fill="currentColor" d="M2.992 6.348c0 1.513.383 2.664 1.14 3.432a.452.452 0 01.01.621.409.409 0 01-.593.012c-.927-.936-1.398-2.303-1.398-4.065 0-1.762.47-3.129 1.398-4.067a.404.404 0 01.594.011.452.452 0 01-.011.622c-.757.768-1.14 1.922-1.14 3.434zM19.347 18.57a.43.43 0 00-.42-.44v.003h-1.549l-3.613-10.17c.31-.397.476-.93.476-1.613 0-.773-.202-1.373-.605-1.779-.387-.39-.944-.588-1.658-.588-.715 0-1.27.199-1.656.588-.4.404-.602 1.003-.602 1.779 0 .683.165 1.218.476 1.613L6.583 18.13H5.078a.431.431 0 00-.42.44v2.83c0 .244.188.44.42.44h13.85a.43.43 0 00.42-.44v-2.83zm-8.44-13.367c.222-.225.583-.34 1.07-.345.49 0 .852.115 1.076.342.23.232.347.619.347 1.145 0 .365-.061.656-.17.883a.99.99 0 01-.177.26.95.95 0 01-.26.177c-.21.106-.48.162-.815.162-.331 0-.6-.053-.81-.16a.872.872 0 01-.26-.176.92.92 0 01-.174-.26c-.112-.225-.171-.519-.171-.883 0-.526.115-.916.345-1.145zM7.483 18.13l3.42-9.625c.305.132.661.205 1.078.202a2.71 2.71 0 001.082-.208l3.423 9.628h-1.628l-2.479-6.93-.004-.007-.004-.007a.247.247 0 00-.035-.06l-.013-.018-.02-.03a.205.205 0 00-.025-.035c-.014-.012-.029-.022-.044-.032l-.017-.013-.023-.016c-.016-.012-.031-.024-.05-.031a.027.027 0 01-.007-.006l-.007-.006c-.011-.004-.023-.005-.035-.007a.433.433 0 01-.06-.01c-.017-.002-.034-.005-.05-.005-.023 0-.044.005-.066.009a.609.609 0 01-.044.007c-.013 0-.026 0-.04.006l-.002.002-.004.003-.007.004c-.031.014-.056.034-.082.053l-.056.042a.597.597 0 00-.044.07l-.009.013a.327.327 0 00-.036.063l-.004.007-.002.002-.003.005-2.448 6.93H7.482zm5.493-2.74h-1.972l.98-2.773.992 2.773zm5.532 3.622v1.952H5.501v-1.952h13.006zm-5.219-2.742l.664 1.86h-3.921l.658-1.86h2.6zm-6.88-7.275a.41.41 0 00.292.124.415.415 0 00.303-.135.452.452 0 00-.011-.622c-.437-.442-.659-1.12-.659-2.014 0-.893.222-1.574.661-2.017a.455.455 0 00.009-.621.406.406 0 00-.594-.009c-.608.614-.916 1.507-.916 2.647 0 1.143.308 2.034.916 2.647zM20.44 2.281c.927.938 1.397 2.308 1.397 4.067 0 1.76-.47 3.13-1.397 4.065a.415.415 0 01-.292.123.413.413 0 01-.302-.135.455.455 0 01.011-.621c.756-.765 1.14-1.916 1.14-3.432 0-1.512-.384-2.666-1.14-3.434a.455.455 0 01-.011-.622.408.408 0 01.594-.011zm-3.48 6.078a.455.455 0 00-.01.622.401.401 0 00.3.135c.103 0 .21-.04.29-.12.611-.617.92-1.505.92-2.648 0-1.143-.309-2.033-.917-2.65a.406.406 0 00-.593.012.455.455 0 00.01.621c.44.446.662 1.12.662 2.017 0 .894-.224 1.572-.661 2.011z" /></svg>'
      }
      width={size}
      height={size}
      color={color ? color : skin.colors.neutralHigh}
    />
  );
};

export default IconAntennaLight;

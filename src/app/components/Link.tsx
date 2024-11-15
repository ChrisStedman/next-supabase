import NextLink from 'next/link'
import  { Link as RadixLink} from '@radix-ui/themes'

interface Props {
    href: string;
    children: string
}

/*
    Composition of links required to enable themed styling, without forcing a full page reload when clicked
*/
 
const Link = ({href, children}: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
    </NextLink>
  )
}

export default Link

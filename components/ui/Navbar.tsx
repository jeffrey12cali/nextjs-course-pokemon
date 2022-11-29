import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
    const { theme } = useTheme();
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Icono de la app"
                width={70}
                height={70}
            />
            <NextLink href="/" legacyBehavior passHref>
                <a style={{ display: 'flex' }}>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okémon</Text>
                </a>
            </NextLink>
            <Spacer css={{ flex: 1 }}/>
            <NextLink href="/favorites" legacyBehavior passHref>
                <a style={{ display: 'flex', marginRight: '10px' }}>
                    <Text color="white">Favoritos</Text>
                </a>
            </NextLink>
        </div>
    )
}

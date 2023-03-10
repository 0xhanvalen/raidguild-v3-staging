import {Box, VStack, HStack, Image, Heading} from "@chakra-ui/react";

export default function PageTitle(props) {

    return (<>
    <VStack py="2rem">
        <Image src="/assets/illustrations/swords.svg" />
        <HStack>
            <Image src="/assets/illustrations/LeftWing.svg" sx={{width: [`25vw`, `30vw`]}}/>
            <Heading fontFamily="uncial" color="white" maxW="15ch" textAlign="center">{props?.title}</Heading>
            <Image src="/assets/illustrations/RightWing.svg" sx={{width: [`25vw`, `30vw`]}}/>
        </HStack>
    </VStack>
    </>)
}
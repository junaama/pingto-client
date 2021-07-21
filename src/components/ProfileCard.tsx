import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    SimpleGrid,
    Link
} from '@chakra-ui/react';


export default function ProfileCard() {

    return (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={10}>
            {PROFILE_ITEMS.map((item) => (
                <FeedProfileItem key={item.name} {...item} />
            ))}
        </SimpleGrid>
    );
}

const FeedProfileItem = ({ interests, name, href, distance, img }: ProfileItem) => {
    return (

        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${img})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={img}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Stack direction={'row'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {interests[0]}
                        </Text>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {interests[1]}
                        </Text>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            {interests[2]}
                        </Text>
                    </Stack>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {distance} miles away
                        </Text>

                    </Stack>
                </Stack>
            </Box>

        </Center>
    );
};

interface ProfileItem {
    interests: Array<string>;
    href?: string;
    name: string;
    distance: number;
    img: string;
}

const PROFILE_ITEMS: Array<ProfileItem> = [
    {
        interests: [
            "Dancing", "Fitness", "Gaming"
        ],
        href: '#',
        name: "Stacey Paul",
        distance: 8,
        img: 'https://images.unsplash.com/photo-1557555187-23d685287bc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        interests: [
            "Dancing", "Fitness", "Writing"
        ],
        href: '#',
        name: "Megan Jones",
        distance: 3,
        img: 'https://images.unsplash.com/photo-1616012367641-fdc2caa22cb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
    },
    {
        interests: [
            "Gardening", "Fitness", "Cooking"
        ],
        href: '#',
        name: "Xavier Gonzalez",
        distance: 1,
        img: 'https://images.unsplash.com/photo-1545704881-d5dfa19efa38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80'
    },
];
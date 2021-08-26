import React, { useContext, useEffect } from 'react';
import { Flex, Box, useColorModeValue, Link } from '@chakra-ui/react';
import { UserContext } from '../../../contexts/UserContext';
import PlaylistContainer from './UserPlaylistContainer';
export const UserPlaylists = () => {
  const { userObj, getUsersPlaylists, userPlaylists } = useContext(UserContext);
  useEffect(() => {
    getUsersPlaylists();
  }, []);
  return (
    <Flex p={50} w='full' alignItems='center' justifyContent='center'>
      <Box
        mx='auto'
        px={8}
        py={4}
        rounded='lg'
        shadow='lg'
        bg={useColorModeValue('brand.100', 'brand.700')}
        maxW='2xl'
      >
        <Box mt={2}>
          <Link
            fontSize='2xl'
            color={useColorModeValue('gray.700', 'white')}
            fontWeight='700'
            _hover={{
              color: useColorModeValue('gray.600', 'gray.200'),
              textDecor: 'underline',
            }}
          >
            User Playlists
          </Link>

          {userPlaylists && (
            <div>
              <PlaylistContainer userPlaylists={userPlaylists.slice(0, 1)} />
            </div>
          )}
        </Box>

        <Flex justifyContent='space-between' alignItems='center' mt={4}>
          <Link
            color={useColorModeValue('brand.600', 'brand.400')}
            _hover={{ textDecor: 'underline' }}
          ></Link>

          <Flex alignItems='center'>
            <Link
              color={useColorModeValue('gray.700', 'gray.200')}
              fontWeight='700'
              cursor='pointer'
            >
              {userObj.user_name}
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default UserPlaylists;

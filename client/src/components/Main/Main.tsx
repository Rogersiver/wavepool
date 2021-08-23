import React from 'react'
import RecentlyPlayed from './RecentlyPlayed/RecentlyPlayed'
import UserPlaylists from './UserPlaylists/UserPlaylists'
import { SimpleGrid } from '@chakra-ui/react'
import RecommendedTracks from './RecommendedTracks/RecommendedTracks'
export const Main = () => {
    return (
        <SimpleGrid minChildWidth="350px" spacing="80px">
          <RecentlyPlayed/>
          <RecommendedTracks/>
          <UserPlaylists/>
        </SimpleGrid>
    )
}
export default Main;

import styled from 'styled-components';
import tw from 'twin.macro';

export const SLayoutContainer = styled.main`
	${tw`
    bg-gradient-to-b 
    from-gray-100 
    via-gray-100 
    to-gray-200	
    overflow-x-hidden
    overflow-y-auto
    min-h-screen  
    dark:bg-none
    dark:bg-black
    dark:text-white
  `}
`;

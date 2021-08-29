import styled from 'styled-components';
import tw from 'twin.macro';

export const SDarkToggle = styled.div`
	${tw`
    fixed
    top-1
    right-1
    cursor-pointer
    border-black
    border-2
    px-4
    py-2
    bg-white
    transition-all	
    dark:bg-black
    dark:border-white
    sm:top-10
    sm:right-10
  `}
`;

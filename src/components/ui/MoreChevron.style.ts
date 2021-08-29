import styled from 'styled-components';
import tw from 'twin.macro';

export const SMoreChevron = styled.div`
	${tw`
    w-full
    h-6
    absolute
    bottom-0
    cursor-pointer
    overflow-hidden
    m-auto
  `}
	& > div {
		${tw`w-full h-full`}
	}
`;

export const SMoreChevronBorder = styled.div`
	${tw`
    w-full
    border-b
    border-gray-500
    absolute
    bottom-0
  `}
`;

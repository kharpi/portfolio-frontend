import tw from 'twin.macro';
import styled from 'styled-components';

export const SContactInfo = styled.div`
	${tw`
    flex
    items-center
    justify-center
    h-full
    flex-col
  `}
	& > a {
		${tw`
      text-2xl
      mb-2
    `}
	}
`;

import styled from 'styled-components';
import tw from 'twin.macro';

export const SHeroWrapper = styled.section`
	${tw`
    flex
    justify-center
    items-center
    flex-col
    text-center
  `}
`;

export const SHeroLead = styled.h1`
	${tw`
    text-5xl
    uppercase
    tracking-widest
  `}
`;

export const SHeroDesc = styled.code`
	${tw`
    mt-2
  `}
`;

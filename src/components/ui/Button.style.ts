import { StyledHelper } from 'src/utils/StyledHelper';
import styled, { keyframes, css } from 'styled-components';
import tw from 'twin.macro';
import { IButtonProps } from './Button.ui';

type ISButtonWrapperProps = Pick<IButtonProps, 'fWidth' | 'centered'>;

export const SButtonWrapper = styled.div<ISButtonWrapperProps>`
	${tw`
    flex
    items-center
    justify-center
  `}
	${({ fWidth }) => StyledHelper(tw`w-max`, fWidth && tw`w-full`)}
	${({ centered }) => centered && tw`m-auto`}
`;

const animateButton = keyframes`
  from{
    background-size: 0% 100%;
  }
  to{
    background-size: 200% 100%;
  }
`;

type ISButtonProps = Omit<IButtonProps, 'fWidth' | 'centered' | 'onClick'>;

export const SButton = styled.button<ISButtonProps>`
	${tw`
    px-4
    py-1
  `}
	${({ rounded }) =>
		rounded &&
		css`
			${tw`rounded-b-xl rounded-tr-xl`}
			&:hover {
				${tw`
						rounded-tl-xl
					`}
			}
		`}
	color: ${({ color }) => StyledHelper('black', color)};
	font-weight: ${({ weight }) => StyledHelper('400', weight)};
	background: ${({ bgColor }) => StyledHelper('none', bgColor)};
	${({ animatedBg }) =>
		animatedBg &&
		css`
			background-repeat: no-repeat;
			background-color: ${() => StyledHelper('none', animatedBg.bgColor)};
			background-size: 0% 100%;
			animation: ${animateButton} 1.5s
				${animatedBg.infinite ? 'infinite' : 'normal'} linear;
			background-image: ${() =>
				StyledHelper(
					'none',
					'linear-gradient(90deg, transparent 0%, transparent 50%,' +
						animatedBg.gradientColor +
						' 100%)'
				)};
			&:hover {
				animation: ${animateButton} 1.5s infinite linear;
			}
		`};
	font-size: ${({ textSize }) => StyledHelper('inherit', textSize)};
	${({ customStyle }) => customStyle};
	transition: border-radius 0.25s ease;
`;

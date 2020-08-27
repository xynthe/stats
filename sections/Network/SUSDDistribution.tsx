import { FC } from 'react';

import styled from 'styled-components';
import BasicTreeMap from '../../components/Charts/TreeMap';
import { MAX_PAGE_WIDTH } from '../../constants/styles';

const SUSDDistribution: FC = () => (
	<SectionWrap>
		<SectionTitle>SUSD DISTRIBUTION</SectionTitle>
		<SectionSubtitle>Distribution of sUSD desposited/stored</SectionSubtitle>
		<BasicTreeMap />
	</SectionWrap>
);

const SectionWrap = styled.div`
	background: ${(props) => props.theme.colors.mediumBlue};
	max-width: ${MAX_PAGE_WIDTH - 40}px;
	margin: 20px auto;
	padding: 20px;
`;

const SectionTitle = styled.div`
	font-style: normal;
	font-weight: 900;
	font-size: 20px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.white};
	margin: 10px 0;
`;

const SectionSubtitle = styled.div`
	margin: 10px 0 20px 0;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 18px;
	color: ${(props) => props.theme.colors.white};
	opacity: 0.5;
`;

export default SUSDDistribution;

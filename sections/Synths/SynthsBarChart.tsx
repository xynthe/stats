import { FC } from 'react';
import styled from 'styled-components';

import SidewaysBarChart from 'components/Charts/SidewaysBarChart';
import { ChartTitle, ChartSubtitle } from 'components/common';
import { OpenInterest } from 'types/data';

type SynthsBarChartProps = {
	data: OpenInterest;
};

const SynthsBarChart: FC<SynthsBarChartProps> = ({ data }) => (
	<SynthsBarChartContainer>
		<ChartTitle>SYNTH vs iSYNTH</ChartTitle>
		<ChartSubtitle>Long/short interest on cryptoassets</ChartSubtitle>
		<SidewaysBarChart data={data} />
	</SynthsBarChartContainer>
);

const SynthsBarChartContainer = styled.div`
	background: ${(props) => props.theme.colors.mediumBlue};
	width: 49%;
	height: 680px;
	overflow-y: scroll;
	@media only screen and (max-width: 854px) {
		width: 100%;
	}
`;

export default SynthsBarChart;

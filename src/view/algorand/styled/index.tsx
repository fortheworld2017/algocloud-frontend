import styled from "styled-components";

export const ChartWindowWrapper = styled.div`
  margin-top: 16px;
  padding: 1.25rem;
  background: #1e2d58; 
  background: var(--algocloud-card-bg-color); 
  box-shadow: 0 0 0 1px var(--card-border);
  width: 100%;
  border-radius: 5px;
  position: relative;
`;

export const ChartWrapper = styled.div`
  height: 100%;
  min-height: 300px;

  @media screen and (max-width: 600px) {
    min-height: 200px;
  }
`;

export const SectionTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
`;

export const SectionTitle = styled.h5`
  color: var(--algocloud-body-bg-2);
  margin-bottom: 10px;
  a {
    color: var(--algocloud-body-bg-2);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  align-items: center;
  gap: ${(props) => props.gap ? props.gap : '5px'};
`;

export const OptionButtonWrapper = styled.div`
  top: 20px;
  zIndex: 10;
  right: ${(props) => props.right ? props.right : 'auto'};
  left: ${(props) => props.left ? props.left : 'auto'};
`;

export const Divider = styled.div`
  top: 20px;
  zIndex: 10;
  width: ${(props) => props.width ? props.width : '1px'};
  height: 33px;
  background-color: grey;
  margin-left: 10px;
`;

export const OptionButtonContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const OptionButtonBottomContainer = styled.div`
  display: flex;
  margin-top: 10px;
  * {
    display: flex;
    align-items: flex-end;
    margin-bottom: 0px;
  }
`;

export const OptionButton = styled.div`
  font-weight: 500;
  width: fit-content;
  white-space: nowrap;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #687dfd;
  cursor: pointer;
  color: ${(props) => props.active ? '#fff' : 'var(--algocloud-btn-link-color)'};
  margin-left: 10px;
  width: ${(props) => props.width ? props.width : 'auto'};
  background-color: ${(props) => props.active ? 'var(--algocloud-btn-link-color)' : 'transparent'};
  text-align: center;
  :hover {
    cursor: pointer;
    background-color: rgb(104 125 253 / 90%);
    color: #fff;
  };
  :active {
    background-color: #3350fc
  }

  
`;

export const AssetIndicator = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PoolIndicator = styled.div`
  width: 30%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  color: ${({ theme }) => theme.text1}
  border-radius: 3px;
  height: 16px;
  width: 16px;
  padding: 0px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const GraphWrapper = styled.div`
  position: relative;
  padding-top: ${(props) => props.pt ? props.pt : ''};
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  padding: 0;
  align-items: center;
  align-items: ${({ align }) => align && align};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  justify-content: ${({ justify }) => justify};
`;

export const RowBetween = styled(Row)`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
`;

export const FlexColumn = styled.div`
  flex: 1;
`;

export const AlgoexplorerSection = styled.div`
  margin-top: 10px;
  color: var(--algo-body);
  font-size: 12px;

  a {
    color: #687dfd;
    margin-left: 6px;
  }
`;

export const NoteCardContainer = styled.div`
  margin: 10px;
  color: var(--algo-body);
  font-size: 12px;
  background: var(--algocloud-card-bg-color);
  padding: 16px;
  box-shadow: 0 0 0 1px var(--card-border);
  border: 1px solid var(--accent-warn);
  border-radius: 10px;
`;

export const NoteTitle = styled.h5`
  color: var(--algocloud-body-bg-2);
  text-transform: capitalize;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  a {
    color: var(--algocloud-body-bg-2);
  }
`;

export const FormattedDate = styled.span`
  color: var(--base-50);
  font-size: 12px;
`;

export const NoteDescription = styled.h6`
  color: var(--base-70) !important;
  text-transform: capitalize;
  padding-left: 10px;
`;

export const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NoWrapContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: fit-content;
  white-space: nowrap;
`;
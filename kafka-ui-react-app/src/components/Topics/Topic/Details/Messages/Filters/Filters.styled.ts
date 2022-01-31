import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-right: 16px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
  }
`;

export const FilterInputs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 90%;

  & > div:first-child {
    width: 25%;
  }
`;

export const SeekTypeSelectorWrapper = styled.div`
  display: flex;
  & .select-wrapper {
    width: 40% !important;
    & > select {
      border-radius: 4px 0 0 4px !important;
    }
  }

  & .offset-selector {
    border-radius: 0 4px 4px 0 !important;
    border-left: none;
  }

  & .date-picker {
    height: 32px;
    border: 1px ${(props) => props.theme.select.borderColor.normal} solid;
    border-left: none;
    border-radius: 0 4px 4px 0;
    font-size: 14px;
    width: 100%;
    padding-left: 12px;
    color: ${(props) => props.theme.select.color.normal};

    background-image: url('data:image/svg+xml,%3Csvg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M1 1L5 5L9 1" stroke="%23454F54"/%3E%3C/svg%3E%0A') !important;
    background-repeat: no-repeat !important;
    background-position-x: 96% !important;
    background-position-y: 55% !important;
    appearance: none !important;

    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;

export const FiltersMetrics = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 22px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Metric = styled.div`
  color: ${({ theme }) => theme.metrics.filters.color.normal};
  font-size: 12px;
  display: flex;
`;

export const MetricsIcon = styled.div`
  color: ${({ theme }) => theme.metrics.filters.color.icon};
  padding-right: 6px;
  height: 12px;
`;

export const ClearAll = styled.span`
  color: ${({ theme }) => theme.metrics.filters.color.normal};
  font-size: 12px;
  cursor: pointer;
  font-family: Inter;
`;

export const MessageFilterModal = styled.div`
  height: auto;
  width: 560px;
  border-radius: 8px;
  background: ${({ theme }) => theme.modal.backgroundColor};
  position: absolute;
  left: 25%;
  border: 1px solid ${({ theme }) => theme.breadcrumb};
  box-shadow: ${({ theme }) => theme.modal.shadow};
  padding: 16px;
`;

export const FilterTitle = styled.h3`
  line-height: 32px;
  font-family: Inter;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const NewFilterIcon = styled.div`
  color: ${({ theme }) => theme.modal.filterIcon};
  padding-right: 6px;
  height: 12px;
  cursor: pointer;
`;

export const CreatedFilter = styled.p`
  margin: 25px 0 10px;
  color: ${({ theme }) => theme.breadcrumb};
  font-size: 14px;
  line-height: 20px;
`;

export const SavedFiltersContainer = styled.div`
  overflow-y: auto;
  height: 195px;
  // display: flex;
  // flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  // gap: 10px;
`;

export const SavedFilterName = styled.div`
  font-size: 14px;
  line-height: 20px;
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

export const CancelButton = styled.button`
  margin-right: 10px;
  background: ${({ theme }) => theme.button.secondary.backgroundColor.normal};
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  width: 86px;
  height: 32px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export const AddButton = styled.button`
  background: ${({ theme }) => theme.button.primary.backgroundColor.normal};
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  width: 86px;
  height: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.layout.stuffColor};
  cursor: pointer;
`;

export const AddFiltersIcon = styled.div`
  color: ${({ theme }) => theme.metrics.filters.color.icon};
  padding-right: 6px;
  height: 12px;
  cursor: pointer;
`;

export const AddedFiltersWrapper = styled.div`
  padding: 5px 0;
`;

export const DeleteSavedFilter = styled.div`
  color: ${({ theme }) => theme.breadcrumb};
  display: none;
  cursor: pointer;
`;

export const SavedFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
  height: 32px;
  align-items: center;
  &:hover ${DeleteSavedFilter} {
    display: block;
  }
  &:hover {
    background: ${({ theme }) => theme.layout.stuffColor};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

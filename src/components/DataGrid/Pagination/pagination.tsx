import { TablePaginationProps } from '@mui/material/TablePagination';
import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';

export function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

export const Pagination = ({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="secondary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}



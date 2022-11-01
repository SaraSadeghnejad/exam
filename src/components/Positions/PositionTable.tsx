import { FC, ChangeEvent, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import Label from '@/components/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import BulkActions from '@/content/Management/Transactions/BulkActions';

interface PositionTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const PositionTable: FC<PositionTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };


  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );

  const theme = useTheme();

  const { t } = useTranslation();
  return (
    <div className="white dark:bg-slate-900">
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150} sx={{ marginLeft: 'auto', padding: '1.5em' }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel className="text-slate-900 dark:text-slate-100">
                  {t('table.status')}
                </InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                  className="text-slate-900 dark:text-slate-100"
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
        />
      )}
      <Divider />
      <TableContainer sx={{ padding: '2em' }}>
        <Table sx={{ border: '1px solid #eee' }}>
          <TableHead>
            <TableRow
              sx={{
                background: 'transparent',
                paddingTop: '0',
                paddingBottom: '0'
              }}
            >
              <TableCell
                sx={{ padding: '.7em', textAlign: 'center' }}
                className="text-slate-900 dark:text-slate-100"
              >
                {t('table.Position name')}
              </TableCell>
              <TableCell
                sx={{ padding: '.7em', textAlign: 'center' }}
                className="text-slate-900 dark:text-slate-100"
              >
                {t('table.Unit Name')}
              </TableCell>
              <TableCell
                sx={{ padding: '.7em', textAlign: 'center' }}
                className="text-slate-900 dark:text-slate-100"
              >
                {t('table.parent position')}
              </TableCell>
              <TableCell
                sx={{ padding: '.7em', textAlign: 'center' }}
                className="text-slate-900 dark:text-slate-100"
              >
                {t('table.status')}
              </TableCell>
              <TableCell
                sx={{ padding: '.7em', textAlign: 'center' }}
                className="text-slate-900 dark:text-slate-100"
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.id}
                  selected={isCryptoOrderSelected}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCryptoOrderSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, cryptoOrder.id)
                      }
                      value={isCryptoOrderSelected}
                    />
                  </TableCell> */}

                  <TableCell sx={{ padding: '.7em', textAlign: 'center' }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      className="text-slate-900 dark:text-slate-100"
                    >
                      {cryptoOrder.name}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(cryptoOrder.orderDate, 'MMMM dd yyyy')}
                    </Typography> */}
                  </TableCell>

                  <TableCell sx={{ padding: '.7em', textAlign: 'center' }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      className="text-slate-900 dark:text-slate-100"
                    >
                      {cryptoOrder.unitName}
                    </Typography>
                  </TableCell>

         

                  <TableCell sx={{ padding: '.7em', textAlign: 'center' }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      className="text-slate-900 dark:text-slate-100"
                    >
                      {cryptoOrder.parentPosition}
                    </Typography>
                  </TableCell>

                  <TableCell sx={{ padding: '.7em', textAlign: 'center' }}>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      className="text-slate-900 dark:text-slate-100"
                    >
                      {getStatusLabel(cryptoOrder.status)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      noWrap
                      sx={{ textAlign: 'center' }}
                    >
                      {cryptoOrder.sourceDesc}
                    </Typography>
                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ padding: '.7em', textAlign: 'center' }}
                  >
                    <Tooltip title={t('table.Edit Position')} arrow>
                      <IconButton
                        sx={{
                          background: theme.colors.info.lighter,
                          color: theme.palette.info.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={t('table.Delete Position')} arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.secondary.lighter
                          },
                          color: theme.palette.secondary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableRow>
            <TableCell sx={{ borderBottom: 'none', padding: '0.5em' }}>
              <Link href="/" passHref>
                <a className="flex w-fit px-2 py-2 text-green-500 transition-colors rounded hover:text-green-500 hover:bg-green-100">
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {t('table.Create position')}
                  </Typography>
                  <AddIcon sx={{ color: theme.palette.success.main }} />
                </a>
              </Link>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          className="text-slate-900 dark:text-slate-100"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          labelRowsPerPage={t('navMenu.Rows per page')}
          rowsPerPageOptions={[5, 10, 25, 30]}
          labelDisplayedRows={({ from, to, count }) =>
            ` ${from}-${to}  ${t('navMenu.of')} ${count} `
          }
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </Box>
    </div>
  );
};

PositionTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

PositionTable.defaultProps = {
  cryptoOrders: []
};

export default PositionTable;

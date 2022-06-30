import React, { useState } from 'react';
import { Button } from '../components';
import { Box, Grid, Input, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
import { SignalWifiOff, NetworkCell } from '@mui/icons-material';

function createData(
    item1: any,
    item2: any,
    item3: any,
    item4: any,
  ) {
    return { item1, item2, item3, item4 };
  }

const rows = [
    createData('AC', 'M', '%', '/'),
    createData(7, 8, 9, 'x'),
    createData(4, 5, 6, '-'),
    createData(1, 2, 3, '+'),
    createData(0, null, '.', '='),
  ];
const LandingPage = () => {
    const [value, setValue] = useState('0');
    console.log("🚀 ~ file: index.tsx ~ line 24 ~ LandingPage ~ value", value)

    const calculate = (num: any) => {
        if (!isNaN(num) || num === '.') setValue(value + num);
    }

    return (
        <Box component={'section'}>
            <Grid
                xs={8}
                item
                container 
                display={'flex'} 
                alignItems={'center'} 
                justifyContent={'center'} 
                sx={{ height: '100vh', m: '0 auto' }}
            >
                <Grid
                    xs={12}
                    item
                    sx={{
                        borderRadius: 20,
                        backgroundColor: 'black',
                        height: 600,
                        maxWidth: '320px !important',
                        border: 2,
                        borderColor: '#89a5b4',
                        p: '35px 15px',
                        boxSizing: 'border-box',
                        position: 'relative',
                    }}
                >
                    {/* header */}
                    <Grid item xs={12} display={'flex'} justifyContent={'space-between'} sx={{
                        // backgroundColor: 'red',
                        height: '20px',
                        position: 'absolute',
                        top: '8px',
                        left: '50%',
                        width: 'calc(100% - 103px)',
                        transform: 'translateX(-50%)',
                    }}>
                        <Grid item xs={4} sx={{ color: '#fff' }}>9:12</Grid>
                        <Grid item xs={4} display={'flex'} alignItems={'center'}>
                            <Grid item xs={10} sx={{ height: '5px', backgroundColor: '#ccc', borderRadius: '10px', m: '0 auto' }} />
                        </Grid>
                        <Grid item display={'flex'} justifyContent={'center'} xs={4}>
                            <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <SignalWifiOff style={{ color: '#fff' }} fontSize='small' />
                            </Grid>
                            <Grid item xs={4} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <NetworkCell style={{ color: '#fff' }} fontSize='small' />
                            </Grid>
                        </Grid>
                    </Grid>


                    {/* main */}
                    <Grid item xs={12} display={'flex'} flexDirection={'column'} sx={{
                        // backgroundColor: 'white',
                        height: '100%',
                        borderRadius: '35px',
                    }}>
                        <Grid item xs={12} sx={{
                            maxHeight: '140px',
                            borderRadius: '35px 35px 0 0',
                            p: '20px 20px 10px',
                            color: '#fff',
                        }}>
                            <Grid item xs={12} sx={{ height: '40px', fontSize: '20px' }}>123</Grid>
                            <Grid item xs={12} display={'flex'} alignItems={'center'} sx={{ height: '70px' }}>
                                <Input
                                    value={value}
                                    sx={{ width: '100%', height: '100%', color: '#fff', fontSize: '26px', fontWeight: 600, border: 0, backgroundColor: 'transparent' }}
                                />
                            </Grid>
                        </Grid>

                        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', boxShadow: 'none', height: '100%', borderRadius: '0 0 35px 35px' }}>
                            <Table sx={{ minWidth: '100%', height: '100%' }} aria-label="simple table">
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.item1} >
                                        <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                            <Button onClick={() => calculate(row.item1)} variant='contained' sx={{ backgroundColor: (!isNaN(row.item1)) ? '#313131' : '#a0a0a0', height: '55px', width: '55px', borderRadius: '50%', minWidth: 'unset !important', fontSize: '24px', fontWeight: 100 }}>{row.item1}</Button>
                                        </TableCell>

                                        {
                                            row.item2 ? (
                                                <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                                    <Button onClick={() => calculate(row.item2)} variant='contained' sx={{ backgroundColor: (!isNaN(row.item2)) ? '#313131' : '#a0a0a0', height: '55px', width: '55px', borderRadius: '50%', minWidth: 'unset !important', fontSize: '24px', fontWeight: 100 }}>{row.item2}</Button>
                                                </TableCell>
                                            ) : <TableCell align="center" sx={{ p: 0, border: 0 }} />
                                        }
                                        
                                        <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                            <Button onClick={() => calculate(row.item3)} variant='contained' sx={{ backgroundColor: (!isNaN(row.item3) || row.item3 === '.') ? '#313131' : '#a0a0a0', height: '55px', width: '55px', borderRadius: '50%', minWidth: 'unset !important', fontSize: '24px', fontWeight: 100 }}>{row.item3}</Button>
                                        </TableCell>
                                        <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                            <Button variant='contained' sx={{ backgroundColor: '#f69a06', height: '55px', width: '55px', borderRadius: '50%', minWidth: 'unset !important', fontSize: '24px', fontWeight: 100 }}>{row.item4}</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>


                    {/* footer button */}
                    <Grid item xs={5} display={'flex'} alignItems={'center'} sx={{ m: '15px auto 0' }}>
                        <Grid item xs={12} sx={{ height: '5px', backgroundColor: '#ccc', borderRadius: '10px' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingPage;

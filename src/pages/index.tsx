import React, { useState } from 'react';
import { SignalWifiOff, NetworkCell } from '@mui/icons-material';
import {
    Box, Grid, Input, Table, TableBody,
    TableCell, TableContainer, TableRow, Paper
} from '@mui/material';

import { Button } from '../components';
import {
    Sum,
    Minus,
    Divide,
    Square,
    Fraction,
    Multiply,
    MainOperator,
} from '../helper';

function createData(item1: any, item2: any, item3: any, item4: any) {
    return { item1, item2, item3, item4 };
  }

const rows = [
    createData('AC', '1/m', '^2', '/'),
    createData(7, 8, 9, 'x'),
    createData(4, 5, 6, '-'),
    createData(1, 2, 3, '+'),
    createData(0, null, '.', '='),
];

const operatorsSymbol = ['1/m', '^2', '/', '+', '-', 'x'];

const operatorFunc: any = {
    '+': Sum,
    '-': Minus,
    '/': Divide,
    'x': Multiply,
};

const LandingPage = () => {
    const [num1, setNum1] = useState(0);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [operator, setOperator] = useState('');

    const padTo2Digits = (num: number) => {
        return String(num).padStart(2, '0');
    }

    const now = new Date();
    const current = `${padTo2Digits(now.getHours())} : ${padTo2Digits(now.getMinutes())}`;


    const calculate = (val: string) => {
        setOperator(val);
        let res = 0;

        if (val === '^2') {
            res = Square(+value);
            setNum1(res);
            setResult(res.toString());
        } else if (val === '1/m') {
            res = Fraction(+value);
            setNum1(res);
            setResult(res.toString());
        } else {
            res = MainOperator(
                val,
                result,
                +value,
                setNum1,
                setResult,
                num1,
                operatorFunc[val]
            );
        }

        return res;
    };

    const initial = (val: any) => {
        if (!isNaN(val) || val === '.') setValue(value + val);

        if (val === 'AC') {
            if (+value !== 0) {
                setValue('');
            } else {
                setResult('');
                setOperator('');
            }
        }

        if (operatorsSymbol.includes(val)) calculate(val);

        if (val === '=') {
            if (!result) {
                setNum1(+value);
                setResult(value + ' = ');
            } else {
                const equalRes = calculate(operator);
                setResult(`${num1} ${operator} ${value} =`);
                setValue(equalRes.toString());
            }
        }
    }

    return (
        <Box component={'section'}>
            <Grid
                item
                xs={8}
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
                        border: 2,
                        height: 600,
                        p: '35px 15px',
                        borderRadius: 20,
                        position: 'relative',
                        borderColor: '#89a5b4',
                        boxSizing: 'border-box',
                        backgroundColor: 'black',
                        maxWidth: '320px !important',
                    }}
                >
                    {/* header */}
                    <Grid item xs={12} display={'flex'} justifyContent={'space-between'} sx={{
                        top: '8px',
                        left: '50%',
                        height: '20px',
                        position: 'absolute',
                        width: 'calc(100% - 103px)',
                        transform: 'translateX(-50%)',
                    }}>
                        <Grid item xs={4} sx={{ color: '#fff' }}>{current}</Grid>
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
                        height: '100%',
                        borderRadius: '35px',
                    }}>
                        <Grid item xs={12} sx={{
                            color: '#fff',
                            maxHeight: '140px',
                            p: '20px 20px 10px',
                            borderRadius: '35px 35px 0 0',
                        }}>
                            <Grid item xs={12} sx={{ height: '40px', fontSize: '20px' }}>{result}</Grid>
                            <Grid item xs={12} display={'flex'} alignItems={'center'} sx={{ height: '70px' }}>
                                <Input
                                    value={value || '0'}
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
                                            <Button
                                                onClick={() => initial(row.item1)} 
                                                variant='contained' 
                                                sx={{ backgroundColor: (!isNaN(row.item1)) ? '#313131' : '#a0a0a0' }}
                                            >
                                                {row.item1}
                                            </Button>
                                        </TableCell>

                                        {
                                            row.item2 ? (
                                                <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                                    <Button onClick={() => initial(row.item2)} variant='contained' sx={{ backgroundColor: (!isNaN(row.item2)) ? '#313131' : '#a0a0a0' }}>{row.item2 === '1/m' ? (<p style={{ fontSize: '19px' }}>1/m</p>) : row.item3}</Button>
                                                </TableCell>
                                            ) : <TableCell align="center" sx={{ p: 0, border: 0 }} />
                                        }
                                        
                                        <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                            <Button onClick={() => initial(row.item3)} variant='contained' sx={{ backgroundColor: (!isNaN(row.item3) || row.item3 === '.') ? '#313131' : '#a0a0a0' }}>{row.item3 === '^2' ? (<p>&#13217;</p>) : row.item3}</Button>
                                        </TableCell>
                                        <TableCell align="center" sx={{ p: 0, border: 0 }}>
                                            <Button onClick={() => initial(row.item4)} variant='contained' sx={{ backgroundColor: '#f69a06' }}>{row.item4}</Button>
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

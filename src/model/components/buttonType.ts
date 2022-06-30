export interface ButtonType {
    variant: 'text' | 'contained' | 'outlined',
    children: React.ReactNode,
    sx?: object,
    value?: any,
    onClick?: (target: any) => void,
}
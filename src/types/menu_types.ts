// src/types/menu_types.ts
import type { SvgIconComponent } from '@mui/icons-material';

export type MenuItem = {
    icon: SvgIconComponent;
    label: string;
    path: string;
};
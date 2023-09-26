import { createContext } from "react";
import { ThemeContextType }from './IContext';

const context = createContext<ThemeContextType>({} as ThemeContextType);

export default context;


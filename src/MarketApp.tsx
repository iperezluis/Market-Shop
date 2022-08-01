import { AppRouter } from "./routes/AppRouter";
import { AppTheme } from "./theme";

export const MarketApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};

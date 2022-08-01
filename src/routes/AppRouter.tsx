import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { SkeletonJournal } from "../components";
import { MarketRoutes } from "../market/routes/MarketRoutes";
import { RootState } from "../store";

export const AppRouter = () => {
  const { status } = useSelector((state: RootState) => state.auth);

  if (status === "checking") {
    return <SkeletonJournal loading />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<MarketRoutes />} />
      ) : (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />

          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};

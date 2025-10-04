import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocationProvider } from "@/contexts/LocationContext";
import StatusBar from "@/components/StatusBar";
import BottomNav from "@/components/BottomNav";
import LocationErrorBanner from "@/components/LocationErrorBanner";
import { useTelegramLocation } from "@/hooks/useTelegramLocation";
import MapPage from "@/pages/MapPage";
import LocationsPage from "@/pages/LocationsPage";
import AchievementsPage from "@/pages/AchievementsPage";
import RatingPage from "@/pages/RatingPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/not-found";

// TODO: remove mock data - will be fetched from Telegram WebApp API
const mockUser = {
  userName: "Дмитрий",
  userAvatar: "",
  points: 620,
  level: 6
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={MapPage} />
      <Route path="/locations" component={LocationsPage} />
      <Route path="/achievements" component={AchievementsPage} />
      <Route path="/rating" component={RatingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const { error: locationError } = useTelegramLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocationProvider>
          <TooltipProvider>
            <div className="h-screen w-full overflow-hidden bg-background">
              <StatusBar 
                userName={mockUser.userName}
                userAvatar={mockUser.userAvatar}
                points={mockUser.points}
                level={mockUser.level}
              />
              
              <LocationErrorBanner error={locationError} />
              
              <main className="h-full pt-16 pb-18 overflow-hidden">
                <Router />
              </main>

              <BottomNav />
            </div>
            <Toaster />
          </TooltipProvider>
        </LocationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

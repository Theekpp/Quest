import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "@/components/ProgressBar";
import { Star, MapPin, Trophy, Settings, LogOut } from "lucide-react";

// TODO: remove mock data - will be fetched from backend
const mockUserData = {
  userName: "Дмитрий Козлов",
  userAvatar: "",
  level: 6,
  currentXP: 350,
  nextLevelXP: 500,
  totalPoints: 620,
  completedLocations: 3,
  totalLocations: 5,
  achievements: 2,
  rank: 4
};

export default function ProfilePage() {
  return (
    <div className="h-full w-full overflow-y-auto pb-24">
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-4 border-accent">
              <AvatarImage src={mockUserData.userAvatar} alt={mockUserData.userName} />
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                {mockUserData.userName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-1">
                {mockUserData.userName}
              </h2>
              <Badge className="bg-primary text-primary-foreground mb-3">
                Уровень {mockUserData.level}
              </Badge>

              <ProgressBar 
                current={mockUserData.currentXP}
                max={mockUserData.nextLevelXP}
                label="Прогресс уровня"
              />
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Очки</p>
                <p className="text-2xl font-bold text-foreground">{mockUserData.totalPoints}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Локации</p>
                <p className="text-2xl font-bold text-foreground">
                  {mockUserData.completedLocations}/{mockUserData.totalLocations}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <Trophy className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Награды</p>
                <p className="text-2xl font-bold text-foreground">{mockUserData.achievements}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <span className="text-2xl">🏅</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Рейтинг</p>
                <p className="text-2xl font-bold text-foreground">#{mockUserData.rank}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Настройки</h3>

          <Button 
            variant="outline" 
            className="w-full justify-start gap-3"
            data-testid="button-settings"
            onClick={() => console.log('Open settings')}
          >
            <Settings className="w-5 h-5" />
            Настройки приложения
          </Button>

          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 text-destructive border-destructive/20 hover:bg-destructive/10"
            data-testid="button-logout"
            onClick={() => console.log('Logout')}
          >
            <LogOut className="w-5 h-5" />
            Выйти из аккаунта
          </Button>
        </div>

        {/* App Info */}
        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>Старик Хоттабыч v1.0.0</p>
          <p className="text-xs mt-1">Литературный квест-платформа</p>
        </div>
      </div>
    </div>
  );
}

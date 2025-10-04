import LeaderboardRow from "@/components/LeaderboardRow";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// TODO: remove mock data - will be fetched from backend
const mockLeaderboard = {
  global: [
    { rank: 1, userName: "Мария Иванова", points: 1250, level: 12 },
    { rank: 2, userName: "Алексей Петров", points: 980, level: 10 },
    { rank: 3, userName: "Елена Сидорова", points: 750, level: 8 },
    { rank: 4, userName: "Дмитрий Козлов", points: 620, level: 6, isCurrentUser: true },
    { rank: 5, userName: "Анна Волкова", points: 500, level: 5 },
    { rank: 6, userName: "Иван Смирнов", points: 450, level: 5 },
    { rank: 7, userName: "Ольга Новикова", points: 400, level: 4 },
  ],
  weekly: [
    { rank: 1, userName: "Дмитрий Козлов", points: 320, level: 6, isCurrentUser: true },
    { rank: 2, userName: "Мария Иванова", points: 280, level: 12 },
    { rank: 3, userName: "Анна Волкова", points: 200, level: 5 },
    { rank: 4, userName: "Елена Сидорова", points: 180, level: 8 },
    { rank: 5, userName: "Алексей Петров", points: 150, level: 10 },
  ]
};

export default function RatingPage() {
  return (
    <div className="h-full w-full overflow-y-auto pb-24">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Рейтинг
          </h1>
          <p className="text-sm text-muted-foreground">
            Соревнуйтесь с другими путешественниками
          </p>
        </div>

        {/* Stats Card */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Ваша позиция</p>
              <p className="text-3xl font-bold text-foreground">#4</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Ваши очки</p>
              <p className="text-3xl font-bold text-foreground">620</p>
            </div>
            <div className="text-5xl">🏅</div>
          </div>
        </Card>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global" data-testid="tab-global">
              Общий
            </TabsTrigger>
            <TabsTrigger value="weekly" data-testid="tab-weekly">
              За неделю
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-3 mt-4">
            {mockLeaderboard.global.map((user) => (
              <LeaderboardRow
                key={user.rank}
                rank={user.rank}
                userName={user.userName}
                points={user.points}
                level={user.level}
                isCurrentUser={user.isCurrentUser}
              />
            ))}
          </TabsContent>

          <TabsContent value="weekly" className="space-y-3 mt-4">
            {mockLeaderboard.weekly.map((user) => (
              <LeaderboardRow
                key={user.rank}
                rank={user.rank}
                userName={user.userName}
                points={user.points}
                level={user.level}
                isCurrentUser={user.isCurrentUser}
              />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

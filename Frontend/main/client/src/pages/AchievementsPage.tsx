import AchievementCard from "@/components/AchievementCard";
import ProgressBar from "@/components/ProgressBar";
import { Card } from "@/components/ui/card";

// TODO: remove mock data - will be fetched from backend
const mockAchievements = [
  {
    id: "1",
    title: "Первый шаг",
    description: "Активируйте первую точку маршрута",
    icon: "🎯",
    unlocked: true,
    unlockedAt: "2 дня назад"
  },
  {
    id: "2",
    title: "Знаток Москвы",
    description: "Посетите 3 локации подряд",
    icon: "🗺️",
    unlocked: true,
    unlockedAt: "вчера"
  },
  {
    id: "3",
    title: "Джинн-покровитель",
    description: "Наберите 500 очков опыта",
    icon: "✨",
    unlocked: false,
  },
  {
    id: "4",
    title: "Литературный критик",
    description: "Прочитайте все цитаты из книги",
    icon: "📚",
    unlocked: false,
  },
  {
    id: "5",
    title: "Мастер навигации",
    description: "Пройдите все локации за один день",
    icon: "🧭",
    unlocked: false,
  },
  {
    id: "6",
    title: "Легенда квестов",
    description: "Завершите маршрут полностью",
    icon: "👑",
    unlocked: false,
  }
];

export default function AchievementsPage() {
  // TODO: remove mock data
  const unlockedCount = mockAchievements.filter(a => a.unlocked).length;
  const totalCount = mockAchievements.length;

  return (
    <div className="h-full w-full overflow-y-auto pb-24">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
            Достижения
          </h1>
          <p className="text-sm text-muted-foreground">
            Отслеживайте свой прогресс и получайте награды
          </p>
        </div>

        {/* Progress Summary */}
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Общий прогресс</h3>
                <p className="text-2xl font-bold text-foreground">
                  {unlockedCount} из {totalCount}
                </p>
              </div>
              <div className="text-5xl">🏆</div>
            </div>
            
            <ProgressBar 
              current={unlockedCount}
              max={totalCount}
            />
          </div>
        </Card>

        {/* Achievements Grid */}
        <div className="space-y-3">
          <h2 className="font-semibold text-lg text-foreground">Все достижения</h2>
          
          {mockAchievements.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              id={achievement.id}
              title={achievement.title}
              description={achievement.description}
              icon={achievement.icon}
              unlocked={achievement.unlocked}
              unlockedAt={achievement.unlockedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

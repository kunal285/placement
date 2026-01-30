import React from 'react';
import { Card, CardContent } from '@/app/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconColor?: string;
  iconBgColor?: string;
}

export function StatCard({ title, value, icon: Icon, trend, iconColor = 'text-primary', iconBgColor = 'bg-primary/10' }: StatCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <p className={cn(
                "text-sm font-medium flex items-center gap-1",
                trend.isPositive ? "text-[var(--success)]" : "text-destructive"
              )}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
                <span className="text-muted-foreground">vs last month</span>
              </p>
            )}
          </div>
          <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center", iconBgColor)}>
            <Icon className={cn("w-7 h-7", iconColor)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

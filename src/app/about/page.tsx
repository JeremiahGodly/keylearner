
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Heart } from "lucide-react";
import { useI18n } from "@/context/i18n-context";

export default function AboutUsPage() {
  const { t } = useI18n();

  const team = [
    {
      name: "Jeremiah Godly Varhese",
      initials: "JV",
      email: "jrmhgodly@gmail.com",
      phone: "8078041809",
    },
    {
      name: "Dan Joseph Varghese",
      initials: "DV",
      email: "danjoseph@gmail.com",
      phone: "9400752784",
    },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{t("Our Team")}</CardTitle>
          <CardDescription>{t("The developers behind KeyLearner.")}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50">
              <Avatar className="h-20 w-20 mb-4">
                <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
              </Avatar>
              <p className="text-lg font-semibold">{member.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${member.email}`} className="hover:underline">{member.email}</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{member.phone}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="items-center text-center">
            <Heart className="text-primary h-12 w-12 mb-2" />
          <CardTitle>{t("Thank You")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            {t("Thank you for using KeyLearner. We hope it helps you on your musical journey!")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

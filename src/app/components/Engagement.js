import { Card, CardContent } from "@/components/ui/card";

export default function Engagement({ data }) {
  return (
    <Card className="w-full max-w-2xl bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border-none mt-8 text-white">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start gap-4">
          {/* <div className="flex items-center justify-center bg-blue-500 rounded-full w-16 h-16 shrink-0">
            <div className="text-center">
              <img src=""></img>
            </div>
          </div> */}
          <div className="space-y-6 flex-1">
            {/* <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="text-3xl font-bold tracking-tight">
                  27,274,628
                </div>
                <div className="text-sm text-zinc-400">Followers</div>
              </div>
              <div>
                <div className="text-3xl font-bold tracking-tight">
                  92,803,351
                </div>
                <div className="text-sm text-zinc-400">Monthly Listeners</div>
              </div>
            </div> */}
            <div className="space-y-4 text-sm leading-relaxed">
              <p>{data}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

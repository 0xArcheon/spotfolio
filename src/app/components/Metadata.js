import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Metadata({ client, startYear, link }) {
  return (
    <div
      className="w-full mx-auto bg-green-200 bg-clip-padding h-max
       backdrop-filter backdrop-blur-3xl bg-opacity-0 text-white px-4 my-8 rounded-lg shadow-lg"
    >
      <table className="w-full opacity-100">
        <tbody>
          <tr className="border-b border-zinc-700">
            <td className="py-4 px-2">
              <div className="text-sm text-zinc-200">Client</div>
              <div className="font-semibold text-sm">{client}</div>
            </td>
            <td className="py-4 px-2">
              <div className="text-sm text-zinc-200">Start Year</div>
              <div className="text-sm">{startYear}</div>
            </td>
            <td className="py-4 px-2">
              <div className="text-sm text-zinc-200">Demo</div>
              <Button
                variant="outline"
                size="sm"
                className="text-zinc-900 border-green-400 hover:bg-emerald-200 hover:text-zinc-900"
              >
                <ExternalLink className="w-4 h-3 mr-0.5" />
                Visit
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

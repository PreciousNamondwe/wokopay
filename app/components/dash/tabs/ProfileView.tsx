import ProfileButton from "../helper/ProfileButton";
import { 
  MessageSquare, 
  Settings,
  CreditCard,

} from "lucide-react";

interface ProfileViewProps{
    mobile:string;
}

const MalawiFlag: React.FC = () => (
  <svg width="24" height="16" viewBox="0 0 300 200" className="rounded-sm inline-block mr-2 shadow-sm">
    <rect width="300" height="66.6" fill="#000000" />
    <rect y="66.6" width="300" height="66.6" fill="#CE1126" />
    <rect y="133.2" width="300" height="66.6" fill="#006733" />
    <circle cx="150" cy="66.6" r="40" fill="#CE1126" clipPath="inset(0 0 40 0)" />
  </svg>
);

export default function ProfileView({ mobile }: ProfileViewProps) {
  return (
    <div className="max-w-lg mx-auto text-center space-y-8 animate-in zoom-in-95 duration-500">
      <div className="relative inline-block">
        <div className="w-32 h-32 rounded-[2.5rem] border-2 border-emerald-500 p-1 mx-auto rotate-3">
          <div className="w-full h-full rounded-[2.2rem] bg-slate-800 flex items-center justify-center -rotate-3 text-4xl font-black text-white">
            FC
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black text-white">Felix Chimwala</h2>
        <div className="flex items-center justify-center gap-2 mt-1">
          <MalawiFlag />
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{mobile}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <ProfileButton icon={Settings} label="Security & PIN" />
        <ProfileButton icon={CreditCard} label="Bank Links" />
        <ProfileButton icon={MessageSquare} label="Woko Support" />
      </div>
    </div>
  );
}
import React from 'react';
import {
  Home,
  BookOpen,
  Code,
  Users,
  MessageSquare,
  Compass,
  Calendar,
  TrendingUp,
  Play,
  Search,
  Bell,
  Menu,
  X,
  User,
  ChevronRight,
  BarChart2,
  Settings,
  Clock,
  CheckCircle,
  Award,
  Check,
  Star,
  Bookmark,
  PlusCircle,
  Edit,
  ThumbsUp,
  MessageCircle,
  ArrowLeft,
  Send,
  EyeOff,
  Eye,
  LogOut,
  Share2,
  Save,
  Trash2,
  AlertTriangle,
  HelpCircle,
  Info,
  ChevronDown,
} from 'react-native-feather';

interface IconProps {
  name: string;
  size: number;
  color: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  const props = { width: size, height: size, stroke: color, fill: 'none' };

  switch (name) {
    case 'home':
      return <Home {...props} />;
    case 'book-open':
      return <BookOpen {...props} />;
    case 'code':
      return <Code {...props} />;
    case 'users':
      return <Users {...props} />;
    case 'message-square':
      return <MessageSquare {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'trending-up':
      return <TrendingUp {...props} />;
    case 'play':
      return <Play {...props} />;
    case 'search':
      return <Search {...props} />;
    case 'bell':
      return <Bell {...props} />;
    case 'menu':
      return <Menu {...props} />;
    case 'x':
      return <X {...props} />;
    case 'user':
      return <User {...props} />;
    case 'chevron-right':
      return <ChevronRight {...props} />;
    case 'chevron-down':
      return <ChevronDown {...props} />;
    case 'bar-chart':
      return <BarChart2 {...props} />;
    case 'settings':
      return <Settings {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'check-circle':
      return <CheckCircle {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'bookmark':
      return <Bookmark {...props} />;
    case 'plus-circle':
      return <PlusCircle {...props} />;
    case 'edit':
      return <Edit {...props} />;
    case 'thumbs-up':
      return <ThumbsUp {...props} />;
    case 'message-circle':
      return <MessageCircle {...props} />;
    case 'arrow-left':
      return <ArrowLeft {...props} />;
    case 'send':
      return <Send {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'eye-off':
      return <EyeOff {...props} />;
    case 'log-out':
      return <LogOut {...props} />;
    case 'share':
      return <Share2 {...props} />;
    case 'save':
      return <Save {...props} />;
    case 'trash':
      return <Trash2 {...props} />;
    case 'warning':
      return <AlertTriangle {...props} />;
    case 'help':
      return <HelpCircle {...props} />;
    case 'info':
      return <Info {...props} />;
    default:
      return <Info {...props} />;
  }
};

export default Icon; 
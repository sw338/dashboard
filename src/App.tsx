import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const lineData = [
  { month: "1月", users: 1200, revenue: 8500 },
  { month: "2月", users: 1900, revenue: 10200 },
  { month: "3月", users: 2800, revenue: 15800 },
  { month: "4月", users: 3500, revenue: 19200 },
  { month: "5月", users: 4200, revenue: 24500 },
  { month: "6月", users: 5100, revenue: 28300 },
];

const barData = [
  { name: "官网", visits: 18500 },
  { name: "App", visits: 12400 },
  { name: "小程序", visits: 8700 },
  { name: "API", visits: 4300 },
  { name: "H5", visits: 6200 },
];

const pieData = [
  { name: "一线城市", value: 45 },
  { name: "二线城市", value: 30 },
  { name: "三线城市", value: 15 },
  { name: "海外", value: 10 },
];

const COLORS = ["#6366f1", "#8b5cf6", "#a78bfa", "#c4b5fd"];

function StatCard({ title, value, change, color }: { title: string; value: string; change: string; color: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-400 mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className={`text-xs mt-1 ${color}`}>{change}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-6 py-4 mb-6">
        <h1 className="text-xl font-bold text-gray-800">📊 数据仪表盘</h1>
        <p className="text-sm text-gray-400">运营数据概览</p>
      </header>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard title="总用户数" value="5,100" change="+18.2% 较上月" color="text-green-500" />
          <StatCard title="月收入" value="¥28,300" change="+15.5% 较上月" color="text-green-500" />
          <StatCard title="活跃用户" value="2,850" change="+12.3% 较上月" color="text-green-500" />
          <StatCard title="转化率" value="4.8%" change="-0.3% 较上月" color="text-red-500" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Line */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">用户增长趋势</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#6366f1" strokeWidth={2} name="用户数" />
                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2} name="收入(¥)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">各渠道访问量</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="visits" fill="#6366f1" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-md mx-auto">
          <h3 className="text-sm font-semibold text-gray-600 mb-4 text-center">用户城市分布</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

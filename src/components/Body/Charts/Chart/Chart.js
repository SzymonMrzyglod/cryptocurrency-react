import {AreaChart, Area, XAxis, YAxis, ResponsiveContainer} from 'recharts';

const Chart = (props) => {
  const lineColor = () => props.changePrice.includes('increase') ? 'green' : 'red';
  
    return ( 
      <div>
        <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={props.history}> 
        
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="1%" stopColor="#4874a6" stopOpacity={0.8}/>
              <stop offset="99%" stopColor="#4874a6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey={(v) => v[0]} tick={false} hide={true}/>
          <YAxis tick={false} hide={true}/>
          <Area type="monotone" dataKey={v => v[1]} stroke={lineColor()} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
     );
}
 
export default Chart;

import React,{useState} from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add'
import Switch from '@material-ui/core/Switch'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Paper from '@material-ui/core/Paper'
import FilterListIcon from '@material-ui/icons/FilterList'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog';
import { MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import {format} from'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { connect } from 'react-redux'
import {AddProject} from'./Actions/action'
const useStyles=makeStyles(theme=>({
  services:{
    fontWeight:300
  },
  button:{
    color:"#fff",
    backgroundColor:theme.palette.common.orange,
    textTransform:"none",
    borderRadius:50,
    "&:hover":{
      backgroundColor:theme.palette.secondary.light
    }
  }

}))
function createData(name, date, services, features, complexity,platforms,users,total) {
  return {name,date,services,features,complexity,platforms,users,total };
}

const ProjectManager=(props)=>{
const classes=useStyles()
const theme=useTheme()
const [websitecheck,setWebsiteCheck] =useState(false)
const [ioscheck,setIosCheck] =useState(false)
const [androidcheck,setAndroidCheck] =useState(false)
const [softwarecheck,setSoftwareCheck] =useState(false)
const [dialogOPen,setDialogOpen]=useState(false)
const [name,setName] =useState("")
const [date,setDate]=useState(new Date())
const [total,setTotal]=useState("")
const[service,setService]=useState("")
const[complexity,setComplexity]=useState("")
const[users,setUsers] =useState("")
const [platforms,setPlatforms]=useState([])
const [features,setFeatures]=useState([])
const PlatformOptions=["Web","iOS","Android"]
const FeaturesOptions=['Photo/Video','GPS',
                      'File Trasfer','User/Authantication',
                      'Biometrics','Push Notification'
                        ]
const TabelCell=['Name','Date','Services','Features','Complexity','Platforms','Users','Total']
const [rows,setRows]=useState([
  createData('Karem', "10/10/10", "Website", "E-commerce","N/A","N/A","N/A","N/A"),
  createData('Aya', "10/10/10", "Website", "E-commerce","N/A","N/A","N/A","N/A"),
  createData('Ali', "10/10/10", "Website", "E-commerce","N/A","N/A","N/A","N/A"),
])
const {data} =props
console.log(props?.data)

return(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Grid container direction="column" >
    <Grid item style={{marginTop:"2em", marginLeft:"5em"}} >
      <Typography variant="h1" >
        projects  
      </Typography>
    </Grid>
    <Grid item >
      <TextField 
      placeholder="search a project details or create a new entry "
        style={{width:"35em",marginLeft:"5em"}}
      InputProps={{endAdornment:<InputAdornment position="end" style={{cursor:"pointer"}} onClick={()=>setDialogOpen(true)}> 
      <AddIcon color="primary" style={{fontSize:30}}/> </InputAdornment>}}/>
    </Grid>
    <Grid item style={{marginLeft:"5em",marginTop:"2em"}} >
      <FormGroup row>
        <FormControlLabel 
        style={{marginRight:"5em"}}
        style={{marginRight:"5em"}}
          control={<Switch checked={websitecheck} color="primary"
          onChange={()=>setWebsiteCheck(!websitecheck)}/>}
          label="website"
          labelPlacement="start"
        />
        <FormControlLabel 
        style={{marginRight:"5em"}}
          control={<Switch checked={ioscheck} color="primary"
          onChange={()=>setIosCheck(!ioscheck)}/>}
          label="iOS Apps"
          labelPlacement="start"
        />
             <FormControlLabel 
             style={{marginRight:"5em"}}
                  control={<Switch checked={androidcheck} color="primary"
                  onChange={()=>setAndroidCheck(!androidcheck)}/>}
                  label="Android Apps"
                  labelPlacement="start"
                />
                <FormControlLabel 
                style={{marginRight:"5em"}}
                control={<Switch checked={softwarecheck} color="primary"
                onChange={()=>setSoftwareCheck(!softwarecheck)}/>}
                label="Custom software"
                labelPlacement="start"
             />
      </FormGroup>
      <Grid item container justify="flex-end" style={{marginTop:"5em"}}>
        <Grid item >
          <FilterListIcon color="secondary" style={{fontSize:55}} />
        </Grid>
      </Grid>
    </Grid>
    <Grid item style={{marginBottom:"15em"}}  >
      <TableContainer component={Paper} elevation={0}>
        <Table>
          <TableHead>
            <TableRow>
              {TabelCell.map((name,index)=>(
                <TableCell align="center" key={index} >
                  {name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.length >0  ?  props.data.map((row,index)=>(
              <TableRow key={index} >
                <TableCell align="center" >
                  {row.name} 
                  </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.service}</TableCell>
                <TableCell align="center" style={{maxWidth:"5em"}}>{row.features}</TableCell>
                <TableCell align="center" >{row.complexity}</TableCell>
                <TableCell align="center">{row.platforms}</TableCell>
                <TableCell align="center">{row.users}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            )):null}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
    <Dialog  fullWidth maxWidth="md" open={dialogOPen} onClose={()=>setDialogOpen(false)} >
            <Grid container justify="center" >
              <Grid item >
                <Typography variant="h1" >
                  Add new project 
                </Typography>
              </Grid>
            </Grid>
            <DialogContent >
              <Grid container justify="space-between">
                <Grid item >
                <Grid item container direction="column" sm>
                    <Grid item >
                      <TextField label="name" id="name" 
                      value={name} onChange={(e)=>setName(e.target.value)} />
                    </Grid>
                    <Grid item container direction="column" style={{marginTop:"5em"}}>
                      <Grid item >
                        <Typography variant="h4" >
                          Service 
                        </Typography>
                      </Grid>
                      <Grid item >
                        <RadioGroup aria-label="service" 
                        name="service" 
                        value={service}
                        onChange={(e)=>setService(e.target.value)}
                        >
                          <FormControlLabel value="website" 
                            classes={{label:classes.services}}
                            label="website" control={<Radio />} />
                              <FormControlLabel value="Mobile App" 
                              classes={{label:classes.services}}
                            label="Mobile App" control={<Radio />} />
                              <FormControlLabel value="Custom Software" 
                              classes={{label:classes.services}}
                            label="Custom Software " control={<Radio />} />
                        </RadioGroup>
                      </Grid> 
                      <Grid item style={{marginTop:"5em"}} >
                        <Select labelId="platforms" id="platforms" 
                        style={{width:"12em"}}
                        multiple value={platforms}
                        displayEmpty
                        renderValue={platforms.length >0 ? undefined :()=>"Platforms"}
                        onChange={(e)=>setPlatforms(e.target.value)}>
                          {PlatformOptions.map((platform,index)=>(
                            <MenuItem key={index} value={platform}>
                              {platform}
                            </MenuItem>
                          ))}
                        </Select>

                      </Grid>

                    </Grid>
                </Grid>
                </Grid>
                
                <Grid item >
                  <Grid item container direction="column" style={{marginTop:"16px"}} sm alignItems="center">
                    <Grid item >
                      <KeyboardDatePicker format="MM/dd/yyyy" value={date}
                        onChange={((newDate)=>setDate(newDate))} />
                    </Grid>
                    <Grid item >
                    <Grid item container direction="column" style={{marginTop:"5em"}}>
                      <Grid item >
                        <Typography variant="h4" >
                          Complexity 
                        </Typography>
                      </Grid>
                      <Grid item >
                        <RadioGroup aria-label="Cmplexity" 
                        name="Cmplexity" 
                        value={complexity}
                        onChange={(e)=>setComplexity(e.target.value)}
                        >
                          <FormControlLabel value="low" 
                            classes={{label:classes.services}}
                            label="low" control={<Radio />} />
                              <FormControlLabel value="Medium" 
                              classes={{label:classes.services}}
                            label="Medium" control={<Radio />} />
                              <FormControlLabel value="High" 
                              classes={{label:classes.services}}
                            label="High " control={<Radio />} />
                        </RadioGroup>
                      </Grid> 
                    </Grid>
                    </Grid>
                  

                    </Grid>
                 </Grid>
                 <Grid item >
                  <Grid item container direction="column" sm alignItems="center">
                    <Grid item >
                      <TextField
                        InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}
                       label="total" value={total} id="total" 
                      onChange={(e)=>setTotal(e.target.value)} />
                    </Grid>
                      <Grid item >
                      <Grid item container direction="column" style={{marginTop:"5em"}}>
                      <Grid item >
                        <Typography variant="h4" >
                          Users 
                        </Typography>
                      </Grid>
                      <Grid item  >
                        <RadioGroup aria-label="users" 
                        name="users" 
                        value={users}
                        onChange={(e)=>setUsers(e.target.value)}
                        >
                          <FormControlLabel value="0-10" 
                            classes={{label:classes.services}}
                            label="0-10" control={<Radio />} />
                              <FormControlLabel value="10-100" 
                              classes={{label:classes.services}}
                            label="10-100" control={<Radio />} />
                              <FormControlLabel value="100+" 
                              classes={{label:classes.services}}
                            label="100+ " control={<Radio />} />
                        </RadioGroup>
                      </Grid> 
                    </Grid>
                    <Grid item style={{marginTop:"5em"}} >
                        <Select labelId="features" id="features" 
                        style={{width:"12em",position:"relative",zIndex:1502}}
                        multiple value={features}
                        displayEmpty
                        renderValue={features.length >0 ? undefined :()=>"Features"}
                        onChange={(e)=>setFeatures(e.target.value)}>
                          {FeaturesOptions.map((feature,index)=>(
                            <MenuItem key={index} value={feature} style={{zIndex:1302,postion:"relative"}}>
                              {feature}
                            </MenuItem>
                          ))}
                        </Select>

                      </Grid>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justify="center" style={{marginTop:"3em"}}>
                <Grid item >
                  <Button color="primary" onClick={()=>setDialogOpen(false)} style={{fontWeight:300}}>Cancel</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.button}
                   onClick={()=>{
                     props.AddProject(name,format(date,'MM/dd/yyyy'),service,features.join('. '),complexity,
                   platforms.join(', '),users,total);
                   setDialogOpen(false);setService('');
                   setPlatforms([]);setFeatures([]);
                   setTotal('');
                   setUsers('');
                   }}>Add Project   </Button>
                </Grid>
              </Grid>
            </DialogContent>
    </Dialog>
  </Grid>
  </MuiPickersUtilsProvider>
)
}
function mapStateToProps(state) {
  return{
    data:state.data
  }
  
}
export default connect(mapStateToProps,{AddProject}) (ProjectManager)
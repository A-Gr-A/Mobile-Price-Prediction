from pydantic import BaseModel

class X(BaseModel):
    battery_power: int
    blue:bool
    clock_speed:int
    dual_sim:bool
    fc:bool	
    four_g:bool	
    int_memory:int	
    m_dep: float
    mobile_wt:int 	
    n_cores:int
    pc	:int
    px_height:int
    px_width:int
    ram	:int
    sc_h:int
    sc_w:int
    talk_time:int
    three_g:bool
    touch_screen:bool
    wifi:bool
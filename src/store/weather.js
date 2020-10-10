import Api from '@/api';

function _weather(sols) {
  let _newSols = [];
  let _keys = Object.keys(sols);
  _keys.forEach(item => {
    let newObj = {};
    let _key = sols[item];
    newObj.sol = Number(item);

    if (!isNaN(newObj.sol)) {
      newObj.time = _key.First_UTC;
      newObj.max = _key.AT.mx;
      newObj.min = _key.AT.mn;

      newObj.season = _key.Season;

      _newSols.push(newObj);
    }
  });

  console.log(_newSols);
  return _newSols;
}

const weather = {
  namespaced: true,

  state: {
    sols: {},
  },
  mutations: {
    SET_SOLS(state, sols) {
      state.sols = sols;
      console.log(state);
    },
  },

  actions: {
    setWeather(context) {
      return Api.getWeather().then(response => {
        context.commit('SET_SOLS', response.data);
        //console.log(response.data, context);
      });
    },
  },

  getters: {
    changeSols(state) {
      return _weather(state.sols);
    },
  },
};
export default weather;

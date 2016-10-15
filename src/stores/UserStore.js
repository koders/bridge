import { observable } from 'mobx';

class UserStore {
	@observable uid = '100002875441040';
  @observable name = 'Rihards Fridrihsons';
  @observable role = 'user';

  changeId()
  {
    this.uid = '100002875441041'
  }

}

export default new UserStore();

import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

interface IArea{
  name: string;
  slotName: string;
  defaultSelected?: boolean;
}

@Component({})
export default class AreaSwitcher extends Vue {

  @Prop()
  contents: IArea[];

  activeContent: IArea = this.contents.find(c => c.defaultSelected) ?? this.contents[0];

  select(slotName: string) {
    console.log('select', slotName);
    this.activeContent = this.contents.find(c => c.slotName === slotName)!;
    console.log(JSON.parse(JSON.stringify(this.activeContent)));
  }

}
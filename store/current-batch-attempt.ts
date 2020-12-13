import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { BatchAttempt } from '~/repositories/batch-attempt';

interface SetCurrentBatchAttemptParams {
  batchAttempt: BatchAttempt;
}

@Module({
  name: 'current-batch-attempt',
  stateFactory: true,
  namespaced: true
})
export default class CurrentBatchAttemptModule extends VuexModule {
  currentBatchAttempt: BatchAttempt | null = null;

  @Mutation
  setCurrentBatchAttempt(params: SetCurrentBatchAttemptParams) {
    this.currentBatchAttempt = params.batchAttempt;
  }
}

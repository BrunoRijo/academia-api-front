import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlunoComponent } from './new-aluno.component';

describe('NewAlunoComponent', () => {
  let component: NewAlunoComponent;
  let fixture: ComponentFixture<NewAlunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAlunoComponent]
    });
    fixture = TestBed.createComponent(NewAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

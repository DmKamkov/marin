const mockTable = [
  {
    key: 1,
    company: 'Starbucks',
    position: 'Master',
    vessel: 'Acme Co.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: '',
    posting: null,
    actions: {
      idcardOutlined: false,
      fireOutlined: true
    }
  },
  {
    key: 2,
    company: 'Starbucks',
    position: 'CO',
    vessel: 'Barone LLC.',
    joining: 'Asap',
    wage: '$3000',
    doc: '',
    remark: 'min 22 months',
    assignee: '',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: true,
      fireOutlined: false
    }
  },
  {
    key: 3,
    company: 'Starbucks',
    position: 'CO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: 'end of December',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: '',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 4,
    company: 'Starbucks',
    position: 'CO',
    vessel: 'Barone LLC.',
    joining: '01.12.2023',
    wage: '$3000',
    doc: '4',
    remark: '',
    assignee: '',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: true
    }
  },
  {
    key: 5,
    company: 'Starbucks',
    position: 'ETO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: '01.12.2023',
    wage: '$3000',
    doc: '4',
    remark: '',
    assignee: 'Andre',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 6,
    company: 'Starbucks',
    position: '2E',
    vessel: 'Binford Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: '',
    posting: null,
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 7,
    company: 'Starbucks',
    position: '2E',
    vessel: 'Acme Co.',
    joining: 'end of December',
    wage: '$3000',
    doc: '',
    remark: 'min 22 months',
    assignee: '',
    posting: null,
    actions: {
      idcardOutlined: true,
      fireOutlined: false
    }
  },
  {
    key: 8,
    company: 'Starbucks',
    position: 'CO',
    vessel: 'Acme Co.',
    joining: 'Asap',
    wage: '$3000-4000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Andre',
    posting: null,
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 9,
    company: 'Gillette',
    position: '2E',
    vessel: 'Big Kahuna Burger Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Andre',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: true
    }
  },
  {
    key: 10,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: 'Asap',
    wage: '$3000',
    doc: '',
    remark: '',
    assignee: 'John',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 11,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Acme Co.',
    joining: 'end of December',
    wage: '$3000',
    doc: '',
    remark: 'min 22 months',
    assignee: 'John',
    posting: null,
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 12,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Abstergo Ltd.',
    joining: 'Asap',
    wage: 'negotiable ( ~ 11,5k)',
    doc: '4',
    remark: '',
    assignee: 'John',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 13,
    company: 'Gillette',
    position: 'ETO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'John',
    posting: null,
    actions: {
      idcardOutlined: true,
      fireOutlined: false
    }
  },
  {
    key: 14,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Big Kahuna Burger Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Nickolas',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 15,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Andre',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 16,
    company: 'Gillette',
    position: 'ETO',
    vessel: 'Binford Ltd.',
    joining: 'Asap',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Nickolas',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 17,
    company: 'Gillette',
    position: 'ETO',
    vessel: 'Binford Ltd.',
    joining: 'end of December',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Andre',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  },
  {
    key: 18,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Abstergo Ltd.',
    joining: 'end of December',
    wage: '$3000',
    doc: '4',
    remark: '',
    assignee: 'Andre',
    posting: null,
    actions: {
      idcardOutlined: false,
      fireOutlined: true
    }
  },
  {
    key: 19,
    company: 'Gillette',
    position: 'CO',
    vessel: 'Biffco Enterprises Ltd.',
    joining: '01.12.2023 - 10.02.2024',
    wage: '$3000',
    doc: '4',
    remark: 'min 22 months',
    assignee: 'Andre',
    posting: '01.01.2024',
    actions: {
      idcardOutlined: false,
      fireOutlined: false
    }
  }
]
export default mockTable;
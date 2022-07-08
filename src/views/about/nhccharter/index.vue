<script setup>
  import Header from "@/components/base/Header.vue";
  import Container from "@/components/layouts/Container.vue";
  import Breadcrumbs from "../../../components/layouts/Breadcrumbs.vue";
  import ArrowList from "@/components/layouts/ArrowList.vue";

  const sectionOneData = [
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Lorem ipsum dolor sit amet ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
  ];

  const sectionTwoData = [
    {
      title: "Annex A - Review Panels",
      titleDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescOne:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescTwo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",

      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Annex B - Review Panels",
      titleDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescOne:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescTwo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",

      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Annex C - Review Panels",
      titleDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescOne:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescTwo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",

      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Annex D - Review Panels",
      titleDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescOne:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescTwo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",

      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
    {
      title: "Annex E - Review Panels",
      titleDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleOne: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescOne:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      subtitleTwo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      subtitleDescTwo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",

      listContent: [
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Neque leo, orci, morbi lectus montes, egestas ac nisi, quam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos sapiente id a? Rerum obcaecati exercitationem odit ea quas possimus, quos et officia ex tempore modi doloribus, quasi, vel ratione?",
      ],
    },
  ];

  const titlesArray = [];
  titlesArray.push(sectionOneData.map((item) => item.title));
  titlesArray.push(sectionTwoData.map((item) => item.title));
  const titles = titlesArray.flat();
</script>

<template>
  <Header />
  <Breadcrumbs />
  <Container>
    <div class="grid md:grid-cols-3 gap-8">
      <div
        class="flex flex-col items-start p-6 pt-0 bg-accent-lightest md:max-w-xs max-h-[30rem] overflow-scroll md:sticky top-48 scrollbar"
      >
        <h3
          class="text-xl lg:text-2xl top-0 sticky pb-2 pt-6 w-full bg-accent-lightest"
        >
          Table Of Content
        </h3>
        <div v-for="(item, index) in sectionOneData">
          <a :href="`#${index}`" class="uppercase p-2">{{ item.title }}</a>
        </div>
      </div>
      <div class="md:col-span-2">
        <div v-for="(item, index) in sectionOneData" class="space-y-4 mb-16">
          <h2 :id="`item-${index}`" class="">
            {{ index + 1 + ". " + item.title }}
          </h2>
          <p>{{ item.description }}</p>
          <div v-if="item.listContent" class="">
            <ArrowList :items="item.listContent" />
          </div>
        </div>
        <div v-for="(item, index) in sectionTwoData" class="space-y-4 mb-8">
          <h2 :id="`item-${index}`" class="">{{ item.title }}</h2>
          <p>{{ item.titleDesc }}</p>
          <h3>{{ item.subtitleOne }}</h3>
          <p>{{ item.subtitleDescOne }}</p>
          <h3>{{ item.subtitleTwo }}</h3>
          <p>{{ item.subtitleDescTwo }}</p>
          <div v-if="item.listContent" class="">
            <ArrowList :items="item.listContent" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
